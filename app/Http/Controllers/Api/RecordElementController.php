<?php
namespace App\Http\Controllers\Api;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Http\Controllers\Controller;
use App\Http\Requests\CategoryRequest;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

class RecordElementController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return LengthAwarePaginator|mixed
     */
    public function index(Request $request,$scraper_id)
    {
        return RecordElement::loadAllRecordElements($scraper_id);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param CategoryRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(RecordElementRequest $request,$projectId,$scraper_id)
    {
        $user = $request->user();
        $recordElement = new RecordElement($request->validated());
        $scraper = Scraper::mine($user->id)::project($projectId)->findOrFail($scraper_id);
        $scraper->items()->save($recordElement);
        return response()->json($recordElement, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        if (!$request->user()->is_admin) {
            return RecordElement::mine($request->user()->id)->findOrFail($id);
        }
        return RecordElement::findOrFail($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param ArticleRequest $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(RecordElementRequest $request, $id)
    {
        $record = RecordElement::findOrFail($id);
        $data = $request->validated();
        $$record->update($data);
        return response()->json($record, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function delete($id)
    {
        $recordElement = RecordElement::findOrFail($id);

        $recordElement->delete();

        return response([], 200);
    }
}